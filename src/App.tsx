import { useState } from "react";
import Tweet from "./components/Tweet";
import AppRoutes from "./Routes";

function App() {
  /*const [tweets, setTweets] = useState<String[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4'
  ])
  */

  /*function createTweet() {
    setTweets([...tweets, 'tweet 5'])
  }
  */

  return (
    <AppRoutes />
    /*<div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button onClick={createTweet}>Create Tweet</button>
    </div>
    */
  )
}

export default App
