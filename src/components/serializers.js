import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SyntaxHighlighter } from "react-syntax-syntax-highlighter";

export const serializers = {
  types: {
    code: (props) => (
      <div className="my-2">
        <SyntaxHighlighter language={props.go.language} style={solarizedDark}>
          {props.go.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};
