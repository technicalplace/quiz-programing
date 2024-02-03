export type Quiz = {
  question: string;
  option: {
    first: string;
    second: string;
    third: string;
  };
  answer: string;
}

export type QuizListInterface = {
  [key: string]: Quiz[];
}

const QuizList: QuizListInterface = {
  'React': [
    {
      question: '1. ReactのuseStateフックは何を返しますか',
      option: {
        first: '新しい値を設定するための関数',
        second: '現在の状態と新しい値を含むオブジェクト',
        third: '現在の状態を取得するための関数',
      },
      answer: '現在の状態と新しい値を含むオブジェクト',
    },
    {
      question: '2. ReactのuseEffectフックは何を行いますか',
      option: {
        first: '状態を変更する',
        second: 'コンポーネントがマウントされたときに副作用を実行する',
        third: 'ボタンのクリックイベントをハンドリングする',
      },
      answer: 'コンポーネントがマウントされたときに副作用を実行する',
    },
    {
      question: '3. ReactのuseContextフックは何を提供しますか',
      option: {
        first: 'ローカルな状態管理',
        second: 'コンポーネントのライフサイクルイベント',
        third: 'コンテキストの値を取得する',
      },
      answer: 'コンテキストの値を取得する',
    },
  ],
  'JavaScript': [
    {
      question: 'JavaScriptの"this"キーワードは何を参照しますか',
      option: {
        first: '現在の関数',
        second: '現在のオブジェクト',
        third: 'グローバルオブジェクト',
      },
      answer: '現在のオブジェクト',
    },
    {
      question: 'JavaScriptの"undefined"は何を意味しますか',
      option: {
        first: '変数が存在しない',
        second: '変数が宣言されているが、値が設定されていない',
        third: 'エラー',
      },
      answer: '変数が宣言されているが、値が設定されていない',
    },
    {
      question: 'JavaScriptの"null"は何を意味しますか',
      option: {
        first: '変数が存在しない',
        second: '変数が宣言されているが、値が設定されていない',
        third: '変数の値が意図的に空に設定されている',
      },
      answer: '変数の値が意図的に空に設定されている',
    },
  ]
}

export default QuizList;