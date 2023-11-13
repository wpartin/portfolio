import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { golang } from "react-syntax-highlighter/dist/esm/languages/prism";

SyntaxHighlighter.registerLanguage("golang", golang);

const CodeBlockSerializer = ({ node }) => {
  let language = node.language || "text";
  return (
    <SyntaxHighlighter language={language} style={solarizedDark}>
      {node.code}
    </SyntaxHighlighter>
  );
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
