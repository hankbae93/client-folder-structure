import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global-style";
import Layout from "@common/layout";

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<ReactQueryDevtools />
				</RecoilRoot>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;
