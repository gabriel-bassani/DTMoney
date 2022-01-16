import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$1200</td>
                        <td>Desenvolvimento</td>
                        <td>16/01/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawal">- R$1200</td>
                        <td>Apartamento</td>
                        <td>16/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}