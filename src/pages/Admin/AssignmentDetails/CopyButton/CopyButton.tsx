import React from 'react';
import {Button} from '@components/Button';
import {CopyButtonProps as Props} from './CopyButton.interface';

type CopyStatus = 'idle' | 'copied' | 'failed';
export function CopyButton(props: Props) {
  const [status, setStatus] = React.useState<CopyStatus>('idle');
  const onClick = async () => {
    if (status === 'idle') {
      try {
        await copyContent(props.copyUrl);
        setStatus('copied');
      } catch (e) {
        console.error(`Failed to copy: ${{e}}`);
        setStatus('failed');
      }
    } else {
      setStatus('idle');
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'idle':
        return 'Copy Share Url';
      case 'copied':
        return 'Copied!';
      default:
        'Copy Share Url';
    }
  };
  return <Button onClick={onClick}>{getButtonText()}</Button>;
}

async function copyContent(content: string) {
  return await navigator.clipboard.writeText(content);
}
