import React from "react";
import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Article from "./panels/Article";
import ArticleView from "./components/ArticleView";

class App extends React.Component {
  state = {
    activePanel: "article"
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Article id="article" articleComponent={ArticleView} />
      </View>
    );
  }
}

export default App;
