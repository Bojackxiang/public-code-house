import { useState, useCallback } from "react";
import { Layout, Icon, Input, Avatar } from "antd";
const { Header, Content, Footer } = Layout;

const iconStyle = {
  color: "white",
  fontSize: 40,
  display: "block",
  paddingTop: 10,
  paddingRight: 20
};

const footerStyle = {
  textAlign: "center"
};

// the children is "Children components"
// children是children components，就是包裹着 components
export default ({ children }) => {
  const [searchContent, setSearchContent] = useState("");

  // use callback to make sure the func will change change its reference
  // 用callback 来优化空间，这个只用reference一次，之后都不会变
  const handleSearchChange = useCallback(event => {
    console.log(event.target.value);
    setSearchContent(event.target.value);
  }, []);

  const handlerOnSearch = useCallback(() => {});

  return (
    <>
      <Layout>
        <Header>
          <div className="header-inner">
            <div className="header-left">
              <div className="logo">
                <Icon type="github" style={iconStyle}></Icon>
              </div>
              <div>
                <Input.Search
                  placeholder="search your project"
                  onChange={handleSearchChange}
                  onSearch={handlerOnSearch}
                />
              </div>
            </div>
            <div className="header-right">
              <div className="user">
                <Avatar size={40} icon="user" />
              </div>
            </div>
          </div>
        </Header>

        <Content>{children}hello world</Content>

        <Footer style={footerStyle}>
          developer by Richard
          <a href="mailto:keiichi911004@gmail.com">Send email to me </a>
        </Footer>
        <style jsx>
          {`
            .header-inner {
              display: flex;
              justify-content: space-between;
            }
            .header-left {
              display: flex;
              justify-content: flex-start;
            }
          `}
        </style>
        <style jsx global>
          {`
            #__next {
              height: 100%;
            };
            .ant-layout{
                height: 100%;
            }
          `}
        </style>
      </Layout>
    </>
  );
};
