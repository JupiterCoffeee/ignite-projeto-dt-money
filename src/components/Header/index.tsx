import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import Logo from '../../assets/Logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>           
        </HeaderContainer>
    )
}