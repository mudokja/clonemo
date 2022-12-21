"use client";
import {$getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';
import { ExampleTheme }  from '../lexicalTheme';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import AutoLinkPlugin from './editorPlugins/AutoLinkPlugin';
import {$generateHtmlFromNodes} from '@lexical/html';
import ToolbarPlugin from './editorPlugins/ToolbarPlugin';
import ListMaxIndentLevelPlugin from './editorPlugins/ListMaxIndentLevelPlugin';


function Placeholder() {
  return <div className="editor-placeholder">글 내용을 입력하세요</div>;
}

const editorConfig = {
    // The editor theme
    namespace:"Post editor",
    theme: ExampleTheme,
    // Handling of errors during update
    onError(error: any) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
    ]
  };

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: { read: (arg0: () => void) => void; }) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
    console.log($generateHtmlFromNodes(editor));
  }, [editor]);

  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

export default function LexicalEditor() {
  const initialConfig = editorConfig;

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
        </div>
      </div>
    </LexicalComposer>
    
  );
}