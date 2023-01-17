import cx_Oracle
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask import Flask
load_dotenv()



#CHAMAR AS VARIAVEIS DE AMBIENTE DO BANCO
USER= os.getenv("USER")
PASS= os.getenv("PASS")
IP_CONNECT= os.getenv("IP_CONNECT")
PORT_DB= os.getenv("PORT_DB")
SID= os.getenv("SID")
LD_LIBRARY_PATH= os.getenv("LD_LIBRARY_PATH")

#CHAMAR VARIAVEIS DE AMBIENTE DA API
PORT_API = os.getenv("PORT_API")

# Configure a conexão com o banco de dados Oracle
lib = cx_Oracle.init_oracle_client(f"{LD_LIBRARY_PATH}")
dsn = cx_Oracle.makedsn("host", "port", "sid")

# Crie a sua aplicação Flask
app = Flask(__name__)


######################################################----ROTAS PARA PAINEL NEWS----##################################################################################
# Crie um endpoint que retorna dados do banco de dados
@app.route("/api/news", methods=["GET"])
def get_news():
    #Conexão com o banco
    connection = cx_Oracle.connect(f"{USER}/{PASS}@{IP_CONNECT}:{PORT_DB}/{SID}")

    #Pegar valor do endpoint
    cd_setor = request.args.get('cd_setor')

    # Execute uma consulta SQL
    cursor = connection.cursor()
    cursor.execute(f"SELECT O.NR_ATENDIMENTO ATENDIMENTO, tasy.OBTER_DADOS_PF(O.CD_PESSOA_FISICA, 'I') DS_IDADE, O.CD_PESSOA_FISICA as CD_PESSOA_FISICA, O.CD_UNIDADE LEITO,S.CD_SETOR_ATENDIMENTO,S.DS_SETOR_ATENDIMENTO SETOR, O.NM_PESSOA_FISICA NOME, tasy.OBTER_DATA_NASCTO_PF(O.CD_PESSOA_FISICA) NASCIMENTO, E.DT_ATUALIZACAO ATUALIZACAO_NEWS, E.QT_PONTUACAO NEWS, E.QT_FREQ_RESP FR, E.QT_TEMP TEMP, E.QT_PA_SISTOLICA PAS, E.QT_FREQ_CARDIACA FC, E.IE_NIVEL_CONSCIENCIA NIVEL_CONSC, tasy.OBTER_ESCALA_DOR_ATEND(O.NR_ATENDIMENTO) DS_ESCALA_DOR FROM tasy.OCUPACAO_UNIDADE_V O INNER JOIN tasy.SETOR_ATENDIMENTO S ON (O.CD_SETOR_ATENDIMENTO = S.CD_SETOR_ATENDIMENTO) LEFT JOIN tasy.ESCALA_MEWS E ON (O.NR_ATENDIMENTO = E.NR_ATENDIMENTO) LEFT JOIN (SELECT MAX(Z.DT_ALERTA) DT_ALERTA, Z.NR_SEQUENCIA, Z.CD_PESSOA_FISICA FROM tasy.ALERTA_PACIENTE Z WHERE Z.NR_SEQ_TIPO_ALERTA = 12 AND Z.DT_FIM_ALERTA IS NULL AND Z.DT_INATIVACAO IS NULL AND Z.DT_LIBERACAO IS NOT NULL GROUP BY Z.CD_PESSOA_FISICA, Z.NR_SEQUENCIA) A ON (A.CD_PESSOA_FISICA = O.CD_PESSOA_FISICA) LEFT JOIN (SELECT PA.CD_PESSOA_FISICA, PA.DT_ATUALIZACAO, PA.IE_NEGA_ALERGIAS FROM tasy.PACIENTE_ALERGIA PA INNER JOIN (SELECT CD_PESSOA_FISICA, MAX(DT_ATUALIZACAO) DT_ATUALIZACAO FROM tasy.PACIENTE_ALERGIA GROUP BY CD_PESSOA_FISICA) AA ON (PA.CD_PESSOA_FISICA = AA.CD_PESSOA_FISICA) AND PA.DT_ATUALIZACAO = AA.DT_ATUALIZACAO) ALERGIAS ON (ALERGIAS.CD_PESSOA_FISICA = O.CD_PESSOA_FISICA AND S.IE_ADEP = 'S' AND S.CD_ESTABELECIMENTO_BASE = 2 AND S.IE_SITUACAO = 'A' AND E.DT_INATIVACAO IS NULL AND E.DT_LIBERACAO IS NOT NULL AND E.DT_ATUALIZACAO = (SELECT MAX(B.DT_ATUALIZACAO) FROM tasy.ESCALA_NEWS B WHERE B.NR_ATENDIMENTO = O.NR_ATENDIMENTO) AND TO_DATE(E.DT_ATUALIZACAO) > (SYSDATE-1)) WHERE O.DS_TIPO_ACOMODACAO NOT LIKE 'Setor sem acomodação' AND O.NR_ATENDIMENTO IS NOT NULL AND S.CD_SETOR_ATENDIMENTO = {cd_setor} AND E.DT_ATUALIZACAO = (SELECT MAX(X.DT_ATUALIZACAO) FROM tasy.ESCALA_MEWS X WHERE X.NR_ATENDIMENTO = O.NR_ATENDIMENTO) AND tasy.OBTER_DADOS_ATENDIMENTO(O.NR_ATENDIMENTO,'DA') IS NULL ORDER BY 4, 3")

    # Obtenha os resultados da consulta e coloque-os em um formato apropriado para retornar como JSON
    rows = cursor.fetchall()

    #fechar conexão com o banco!
    cursor.close()
    connection.close()

    data = [{"nr_atendimento": row[0], "ds_idade": row[1], "cd_pessoa_fisica": row[2], "cd_unidade": row[3], "cd_setor_atendimento": row[4], "ds_setor_atendimento": row[5], "nm_pessoa_fisica": row[6], "dt_nascimento": row[7], "dt_atualizacao_news": row[8], "qt_pontuacao_news": row[9], "qt_freq_resp": row[10], "qt_temp": row[11], "qt_pa_sistologia": row[12], "qt_freq_cardiaca": row[13], "ie_nivel_consciencia": row[14], "qt_escala_dor": row[15]} for row in rows]
    return jsonify(data)

CORS(app)
# Inicie a aplicação
if __name__ == "__main__":
    app.run(host='0.0.0.0', port= PORT_API)