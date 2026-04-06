O sistema utiliza uma estrutura de fila para armazenar os atendimentos.  
Cada pessoa adicionada é representada por um objeto `Atendimento`, contendo nome, CPF, data e hora.

Ao atender uma pessoa:
- Ela é removida da fila
- O sistema registra a hora de saída
- Calcula o tempo de espera
- Exibe as informações na tela
- Salva o último atendimento no `localStorage`

O painel (`painel.html`) lê essas informações do `localStorage` e atualiza automaticamente.
