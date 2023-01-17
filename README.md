# projeto-painel-clinico
Projeto fullstack de painel clinico para monitoramento de pacientes
![image](https://user-images.githubusercontent.com/105258182/212969279-62502725-a4d3-4f51-876f-a82a5bd43a9e.png)

#Como o Projeto funciona
O "Painel de escala MEWS", para te contextualizar,  a escala de MEWS é um panorama clínico que avalia os sinais vitais do paciente e conforme o grau de deterioração desses sinais se define uma cor, sendo azul: estável, verde: precisa de observação, amarelo: precisa chamar o TRR (Time de Resposta Rápida) para evitar uma possível PCR (Parada Cardio Respiratória) e vermelho: o paciente precisa de tratamentos mais radical.
Sendo assim, com base nesses dados criei um painel que fica nos postos de cada andar do hospital onde todos os enfermeiros podem visualizar os pacientes internados no setor e cada paciente exibe uma cor de status conforme o seu estado clínico, isso otimiza o tempo de resposta dos enfermeiros e consecutivamente evita uma possível PCR do paciente, anteriormente esse cálculo para verificar o status do paciente era feito manualmente, ou dentro do nosso sistema interno, porém o nosso sistema interno se limita a um paciente por vez para ser consultado e não exibe as cores conforme o nosso panorama clínico interno.
Para o desenvolvimento desse projeto utilizei novamente react no font-end que foi feito de maneira responsiva para facilitar o acesso a ferramenta em qualquer ambiente do hospital e isso também deixa margem para uma possível evolução do projeto para otimizar outras funções da aréa assistencial, como consulta de alergias do paciente, medicações prescritas para o paciente ou plano nutricional, e python para a criação da API, a API me retorna diversos dados do paciente e esses dados eu trato no front-end utilizando Typescript e parametrizo as cores de cada paciente.

Informações censuradas por motivos de LGPD.
