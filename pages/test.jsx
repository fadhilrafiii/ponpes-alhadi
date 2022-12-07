import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import { COLORS } from 'constants/colors';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import LoadingSpinner from 'components/base/LoadingSpinner';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div>
      <LoadingSpinner size={40} color={COLORS.PrimaryDark} />
    </div>
  ),
});

const Test = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div>
      <Head>
        <title>Test WYSIWYG</title>
      </Head>
      <div
        style={{
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '40px auto',
        }}
      >
        <input style={{ width: '100%', marginBottom: 20 }} placeholder="Input Title" />
        <div>
          <Editor
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <div>{parse(draftToHtml(convertToRaw(editorState.getCurrentContent())))}</div>
      </div>
    </div>
  );
};

export default Test;
