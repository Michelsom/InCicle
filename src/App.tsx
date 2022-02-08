import { WebProvider } from "./context/WebProvider";
import { AppRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";



export function App() {
  return (
    <WebProvider>
      <AppRoutes />
      <GlobalStyle />
    </WebProvider>
  );
}
