const CodeBlockSerializer = ({ node }) => {
  return (
    <pre>
      <code>{node.code}</code>;
    </pre>
  );
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
