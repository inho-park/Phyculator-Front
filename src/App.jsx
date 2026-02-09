import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        <h2>Welcome!</h2>
        <p>메인 콘텐츠 영역입니다.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;