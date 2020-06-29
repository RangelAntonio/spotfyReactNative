import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
    Container,
    SubContainer,
    GroupAction,
    ActionName
    } from './style'





const tabbar = ()=>{
const [iconConfigure] = useState({
    color:'#fff',
    size:25
})



return(
    <Container>
        <SubContainer>
            <GroupAction>
                <Icon name="home"{...iconConfigure}/>
                <ActionName>Início</ActionName>
            </GroupAction>
            <GroupAction>
                <Icon name="search"{...iconConfigure} />
                <ActionName>Buscar</ActionName>
            </GroupAction>
            <GroupAction>
                <Icon name="book-reader"{...iconConfigure} />
                <ActionName>Sua biblioteca</ActionName>
            </GroupAction>
        </SubContainer>
    </Container>
)
}

export default tabbar
