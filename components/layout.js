import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

// the children is "Children components"
// children是children components，就是包裹着 components
export default ({ children }) => (
  <>
    <Layout>
      <Header>
          <span>this is a layout</span>
      </Header>

      <Content>{children}</Content>

      <Footer>
          developer by Richard
          <a href="mailto:keiichi911004@gmail.com">Send email to me </a>
      </Footer>
    </Layout>
  </>
);
