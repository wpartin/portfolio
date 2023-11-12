import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlockSerializer = ({ props }) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter language={language} style={solarizedDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
