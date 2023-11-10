import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const serializers = ({ node }) => {
  return (
    <SyntaxHighlighter language={node.language || "text"} style={solarizedDark}>
      {node.code}
    </SyntaxHighlighter>
  );
};
