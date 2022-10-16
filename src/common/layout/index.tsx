import { ReactNode } from "react";
import { Content, Wrapper } from "./layout.style";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Wrapper>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default Layout;
