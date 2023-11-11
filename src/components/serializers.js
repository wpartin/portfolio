import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlockSerializer = ({ node }) => {
  let language = node.language || "text";
  if (language === "golang") {
    language = "go";
  }
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
