import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { Btns, Container, Content } from "./styles"

export const Sidebar = ({ active  }) => {

    const [value, setValue] = useState('');
    const handleChange = (event ) => {
        setValue(event.target.value);
    }

    const closeSidebar = () =>{
        active(false)
    }
    return(
        <Container>
            <div id="titulo" className="titulo">
                <FaTimes onClick={closeSidebar}/>
                <h4>SETORES:</h4>

            </div>
            <form action="">
                <Content>
                    <div className="setores">
                        <input type="checkbox" name="OBSERVAÇÃO PA" id="setor-5"  value="211" checked={value === '211'} onChange={handleChange}/>
                        <p>OBSERVAÇÃO PA</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UTI CARDIOLÓGICA" id="setor-5"  value="119" checked={value === '119'} onChange={handleChange}/>
                        <p>UTI CARDIOLÓGICA</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UTI CLÍNICA" id="setor-1" value="121" checked={value === '121'} onChange={handleChange} />
                        <p>UTI CLÍNICA</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UTI CLÍNICA II" id="setor-2" value="256" checked={value === '256'} onChange={handleChange} />
                        <p>UTI CLÍNICA II</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UTI CLÍNICA III" id="setor-3" value="301" checked={value === '301'} onChange={handleChange} />
                        <p>UTI CLÍNICA III</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UTI CLINICA IV" id="setor-4" value="306" checked={value === '306'} onChange={handleChange}  />
                        <p>UTI CLINICA IV</p>
                    </div> 
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 1º ANDAR" id="setor-6" value="117" checked={value === '117'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 1º ANDAR</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 3º OESTE" id="setor-6" value="118" checked={value === '118'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 3º OESTE</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 5º NORTE" id="setor-6" value="107" checked={value === '107'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 5º NORTE</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 5º SUL" id="setor-6" value="111" checked={value === '111'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 5º SUL</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 6º NORTE" id="setor-6" value="109" checked={value === '109'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 6º NORTE</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 6º SUL" id="setor-6" value="112" checked={value === '112'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 6º SUL</p>
                    </div>
                    <div className="setores">
                        <input type="checkbox" name="UNIDADE DE INTERNAÇÃO 7º NORTE" id="setor-6" value="108" checked={value === '108'} onChange={handleChange}/>
                        <p>UNIDADE DE INTERNAÇÃO 7º NORTE</p>
                    </div>
                </Content>
                <Btns>
                    <Link to={`/setor/${value}`}>
                        <button onClick={closeSidebar} type="submit" id="btn-filtrar">FILTRAR</button>
                    </Link>
                </Btns>
            </form>
                      
        </Container>
    )
}