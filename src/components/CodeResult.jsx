import { CodeBlock } from 'react-code-block';
import { useCopyToClipboard } from 'react-use';
import { themes } from 'prism-react-renderer';
import { useEffect } from 'react';

function CodeResult({ code, language }) {
  const [state, copyToClipboard] = useCopyToClipboard();

  // Clear copied message after 2 seconds
  useEffect(() => {
    state.value && setTimeout(() => copyToClipboard(''), 2000);
  },[state.value]);

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <CodeBlock code={code} language={language} theme={themes.oneDark}>
      <div className="relative w-4/5 mx-auto my-8">
        <CodeBlock.Code className="bg-gray-900 !p-6 rounded-xl shadow-lg">
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
            <CodeBlock.LineContent className="table-cell text-white" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>

        <button
          className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? 'Copied!' : 'Copy code'}
        </button>
      </div>
    </CodeBlock>
  );
}

export default CodeResult;
