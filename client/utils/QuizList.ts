export type Quiz = {
  id: number;
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

/** TODO: クイズデータをAPIから取得する */
export const QuizList: QuizListInterface = {
  'React': [
    {
      id: 1,
      question: 'ReactのuseStateフックは何を返しますか',
      option: {
        first: '新しい値を設定するための関数',
        second: '現在の状態と新しい値を含むオブジェクト',
        third: '現在の状態を取得するための関数',
      },
      answer: '現在の状態と新しい値を含むオブジェクト',
    },
    {
      id: 2,
      question: 'ReactのuseEffectフックは何を行いますか',
      option: {
        first: '状態を変更する',
        second: 'コンポーネントがマウントされたときに副作用を実行する',
        third: 'ボタンのクリックイベントをハンドリングする',
      },
      answer: 'コンポーネントがマウントされたときに副作用を実行する',
    },
    {
      id: 3,
      question: 'ReactのuseContextフックは何を提供しますか',
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
      id: 1,
      question: 'JavaScriptの"this"キーワードは何を参照しますか',
      option: {
        first: '現在の関数',
        second: '現在のオブジェクト',
        third: 'グローバルオブジェクト',
      },
      answer: '現在のオブジェクト',
    },
    {
      id: 2,
      question: 'JavaScriptの"undefined"は何を意味しますか',
      option: {
        first: '変数が存在しない',
        second: '変数が宣言されているが、値が設定されていない',
        third: 'エラー',
      },
      answer: '変数が宣言されているが、値が設定されていない',
    },
    {
      id: 3,
      question: 'JavaScriptの"null"は何を意味しますか',
      option: {
        first: '変数が存在しない',
        second: '変数が宣言されているが、値が設定されていない',
        third: '変数の値が意図的に空に設定されている',
      },
      answer: '変数の値が意図的に空に設定されている',
    },
    {
      id: 4,
      question: 'JavaScriptには連想配列はありますか',
      option: {
        first: 'ある',
        second: 'わからない',
        third: '存在しない',
      },
      answer: '存在しない',
    },
  ],
  'Vue': [
    {
      id: 1,
      question: 'Vue 3で導入された新しいComposition APIは何のために導入されましたか',
      option: {
        first: 'より美しいUIを作成するための構文の改善',
        second: 'コンポーネントのロジックをより再利用可能で構造化された形で記述するため',
        third: 'ビルドプロセスの最適化のための新しいツール',
      },
      answer: 'コンポーネントのロジックをより再利用可能で構造化された形で記述するため',
    },
  ]
}

export default QuizList;