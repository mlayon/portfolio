import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as laptopData from "../json/laptoploading.json";
import * as typingData from "../json/girltyping.json";
import * as doneData from "../json/doneloading.json";

const loadingOptions = {
  loop: true,
  autoplay: true,
   animationData: typingData.default,
//   animationData: laptopData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const successOptions = {
	loop: false,
	autoplay: true,
	animationData: doneData.default,
	rendererSettings: {
	  preserveAspectRatio: "xMidYMid slice"
	}
}

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		loading: undefined,
      done: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 3600);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <FadeIn>
            <div class="loader">
              <h1>typing up website</h1>
			  {!this.state.loading ? (
                <Lottie options={loadingOptions} height={200} width={200} />
              ) : (
                <Lottie options={successOptions} height={200} width={200} />
              )}
            </div>
          </FadeIn>
        ) : (
          <h1>hello world, i'm mikhaela</h1>
        )}
      </div>
    );
  }
}
