import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index />} />
                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
    </HelmetProvider>
);

export default App;
