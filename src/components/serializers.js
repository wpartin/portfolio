import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const serializers = ({ props }) => {
  return (
    <SyntaxHighlighter
      language={props.node.language || "text"}
      style={a11yDark}
    >
      {props.node.code}
    </SyntaxHighlighter>
  );
};

export default serializers;
