import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlockSerializer = ({ node }) => {
  let language = node.language || "text";
  return (
    <SyntaxHighlighter language={language} style={solarizedLight}>
      {node.code}
    </SyntaxHighlighter>
  );
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
