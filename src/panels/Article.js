import React from "react";
import { Panel, View, CellButton } from "@vkontakte/vkui";

import "./Article.css";

class Article extends React.Component {
  state = {
    popout: null
  };

  componentDidMount() {
    this.openSheet();
  }

  handleClick = () => {
    this.setState({ popout: null });
  };

  openSheet = () => {
    const { articleComponent: ArticlesView } = this.props;

    this.setState({
      popout: (
        <div className="policy-popout-bg">
          <div className="policy-popout-wrapper">
            <div className="policy-popout-btn" onClick={this.handleClick}>
              x
            </div>
            <div>
              <ArticlesView />
            </div>
          </div>
        </div>
      )
    });
  };

  render() {
    return (
      <View popout={this.state.popout} header={false} activePanel="panel">
        <Panel id="panel">
          <CellButton onClick={this.openSheet}>Открыть статью</CellButton>
        </Panel>
      </View>
    );
  }
}

export default Article;
