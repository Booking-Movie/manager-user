const stateDefault = {
  mainEntity: [
    {
      type: 'Question',
      name: ' How do I add a question?',
      acceptedAnswer: {
        type: 'Answer',
        text: 'Just click on the "Add a Question" button at the end of the current questions.'
      }
    },
    {
      type: 'Question',
      name: '✒️ How do I edit a question and its answer?',
      acceptedAnswer: {
        type: 'Answer',
        text: 'You can click on this question text to open an editor, or to the right of every question is an edit icon.'
      }
    },
    {
      type: 'Question',
      name: 'How do I change the order of questions?',
      acceptedAnswer: {
        type: 'Answer',
        text: 'To the left of each question is an icon that you can use to drag questions to a new location.'
      }
    },
    {
      type: 'Question',
      name: '🗑️ I want to start afresh. How do I get rid of these questions?',
      acceptedAnswer: {
        type: 'Answer',
        text: 'To the top right is a button to clear all the contents of the editor.'
      }
    },
    {
      type: 'Question',
      name: '😎 Are Emojis shown in the FAQ search results rich snippets?',
      acceptedAnswer: {
        type: 'Answer',
        text: '<p>At this time, we see Emojis showing in both the questions and answers. As you can see, this editor supports pasting in Emojis. We&#39;ve also developed our <a href="https://classyschema.org/Emoji" target="_blank">Classy Emojis</a> system based on our Classy Unicode script to help people include emojis when their CMS does not let them.</p>'
      }
    },
    {
      type: 'Question',
      name: 'What other helpers do you provide?',
      acceptedAnswer: {
        type: 'Answer',
        text: '<p>We have tools to help you generate <strong><em>json-ld</em></strong> and <strong><em>microdata </em></strong>for:</p><h3>📽️ Videos</h3><p>Single video pages and collections of videos can show up in rich snippets. <a href="https://classyschema.org/Video" target="_blank">Our helper</a> also supports defining clips.</p><h3>📋 How tos</h3><p><a href="https://classyschema.org/HowTo" target="_blank">This helper</a> supports all required and recommended fields as well as more advanced options like sections and linking to videos and clips via IDs.</p><h3>🙋 FAQ Pages</h3><p>You&#39;re looking at it. <a href="https://classyschema.org/FAQPage" target="_blank">This helper</a> generates rich snippets that expand your pages normal result by showing a series of questions with expandable answers.</p>'
      }
    }
  ]
}

const ManagerFaqReducer = (state = stateDefault, { type, payload }) => {
  switch (type) {
    default:
      return { ...state }
  }
}

export default ManagerFaqReducer
