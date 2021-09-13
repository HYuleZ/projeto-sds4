function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                        {/* <th>Vendedor</th>
                        <th>Nome</th>
                        <th>Meta</th>
                        <th>Vlr. Devol.</th>
                        <th>Base Comissão</th>
                        <th>% Atendido</th>
                        <th>Aguard. Lib.</th>
                        <th>Aguard. Crédito</th>
                        <th>Aguard. Estoque</th>
                        <th>Aguard. Faturamento</th>
                        <th>Faturadi + Carteira</th>
                        <th>% Atendido</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;