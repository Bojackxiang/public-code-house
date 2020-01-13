const style = {
    width: '100%',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'pink'
}

/**
 * 传进来一个children的包裹函数来包裹component
 * comp:Comp: 传进来的东西时一个标签， 比如div
 * 设置默认的component
 */
export default ({children, comp:Comp='div'}) => {
    return (
        <Comp style={style}>
            {children}
        </Comp>
    )
}
