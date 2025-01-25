<template>
      <div id="editorjs" class="dark-theme" style="padding-left: 50px; padding-top: 5px;"></div>
  </template>
  
  <script>
  import EditorJS from '@editorjs/editorjs';
  import Header from '@editorjs/header';
  import List from '@editorjs/list';
  import Paragraph from '@editorjs/paragraph';
  import Table from '@editorjs/table';
  import CodeTool from '@editorjs/code';
  import Quote from '@editorjs/quote';
  import Delimiter from '@editorjs/delimiter';
  import Embed from '@editorjs/embed';
  import LinkTool from '@editorjs/link';
  import Marker from '@editorjs/marker';
  import Warning from '@editorjs/warning';
  
  export default {
    data() {
      return {
        editor: null,
        editorData: {},
        isDarkMode: false,
      };
    },
    mounted() {
      this.createEditor();
    },
    methods: {
      getData(){
        return this.editorData;
      },
      setData(set_data){
        this.editorData = set_data
      },
      createEditor() {
        this.editor = new EditorJS({
          holder: 'editorjs',
          placeholder: 'Write here...',
          tools: {
            header: {
              class: Header,
              inlineToolbar: ['link'],
            },
            list: {
              class: List,
              inlineToolbar: true,
            },
            paragraph: {
              class: Paragraph,
              inlineToolbar: true,
            },
            table: {
              class: Table,
              inlineToolbar: true,
              config: {
                rows: 2,
                cols: 3,
              },
            },
            code: CodeTool,
            quote: {
              class: Quote,
              inlineToolbar: true,
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
              },
            },
            delimiter: Delimiter,
            embed: {
              class: Embed,
              config: {
                services: {
                  youtube: true,
                  twitter: true,
                  // ... other services
                },
              },
            },
            linkTool: LinkTool,
            marker: {
              class: Marker,
              shortcut: 'CMD+SHIFT+M',
            },
            warning: {
              class: Warning,
              inlineToolbar: true,
              config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
              },
            },
          },
          data: this.editorData,
          onChange: () => {
            this.editor.save().then((outputData) => {
              this.editorData = outputData;
            });
          },
        });
  
        // this.applyTheme();
      },
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
      },
      applyTheme() {
        const editorContainer = document.getElementById('editorjs');
        if (this.isDarkMode) {
          editorContainer.classList.add('dark-theme');
        } else {
          editorContainer.classList.remove('dark-theme');
        }
      },
    },
    beforeUnmount() {
      if (this.editor) {
        this.editor.destroy();
      }
    },
  };
  </script>
  
  <style>
  /* Light theme (default) */
#editorjs {
  background-color: #fff;
  color: #000;
  width: 100%; 
}

.editor-container { 
  width: 100%; 
}

#editorjs .ce-toolbar__plus { 
  background-color: #f0f0f0; 
  color: #333;
}

/* Dark theme */
#editorjs.dark-theme {
  background-color: #222;
  color: #fff;
}

/* Toolbar */
#editorjs.dark-theme .codex-editor__redactor .ce-toolbar {
  background-color: #333;
}

#editorjs.dark-theme .ce-toolbar__plus,
#editorjs.dark-theme .ce-toolbar__settings-btn {
  background-color: #444;
  color: #fff;
}

/* Toolbar buttons */
#editorjs.dark-theme .ce-toolbar__button {
  color: #bbb;
}
#editorjs.dark-theme .ce-toolbar__button:hover,
#editorjs.dark-theme .ce-toolbar__button.ce-toolbar__button--active {
  color: #fff;
}

/* Inline toolbar */
#editorjs.dark-theme .ce-inline-toolbar {
  background-color: #333;
}
#editorjs.dark-theme .ce-inline-toolbar__button {
  color: #bbb;
}
#editorjs.dark-theme .ce-inline-toolbar__button:hover,
#editorjs.dark-theme .ce-inline-toolbar__button.ce-inline-toolbar__button--active {
  color: #fff;
}

/* Tooltips and popups */
#editorjs.dark-theme .ce-popover {
  background-color: #333;
  color: #fff;
  border-color: #555;
}
#editorjs.dark-theme .ce-popover__item {
  color: #fff;
}
#editorjs.dark-theme .ce-popover__item:hover {
  background-color: #444;
}

/* Table tool popup */
#editorjs.dark-theme .ce-popover--table { 
  background-color: #333;
  color: #fff;
}

#editorjs.dark-theme .ce-popover--table .ce-popover__item {
  color: #fff;
}

#editorjs.dark-theme .ce-popover--table .ce-popover__item:hover {
  background-color: #444;
}

/* Block elements */
#editorjs.dark-theme .ce-block {
  color: #eee;
}
#editorjs.dark-theme .ce-header {
  color: #fff;
}
#editorjs.dark-theme .ce-paragraph {
  color: #eee;
}


.tc-toolbox__toggler{
    color: #eee;
}

.tc-toolbox__toggler:hover{
    color: #a5a5a5;
}

.tc-popover {
    background: black;
}
.tc-popover__item-icon{
    background: black;
}

.ce-block__content,
    .ce-toolbar__content {
        max-width: unset;
       
    }
  </style>