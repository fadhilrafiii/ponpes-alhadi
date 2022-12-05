import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import { COLORS } from 'constants/colors';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import LoadingSpinner from 'components/base/LoadingSpinner';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
  // loading: () => (
  //   <div>
  //     <LoadingSpinner size={40} color={COLORS.PrimaryDark} />
  //   </div>
  // ),
});

const Test = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  console.log(convertToRaw(editorState.getCurrentContent()));
  return (
    <div>
      <Head>
        <title>Test WYSIWYG</title>
      </Head>
      <div>
        <div
          style={{
            margin: '40px auto',
            maxWidth: '600px',
            width: '80%',
          }}
        >
          <Editor
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbar={{
              options: [
                'inline',
                'blockType',
                'fontSize',
                'fontFamily',
                'list',
                'textAlign',
                'colorPicker',
                'link',
                'embedded',
                'emoji',
                'image',
                'remove',
                'history',
              ],
              image: {
                inDropdown: true,
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                urlEnabled: false,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined,
                previewImage: false,
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: 'auto',
                  width: 'auto',
                },
              },
            }}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
