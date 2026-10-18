const Cliente = require('./objetos/Cliente');
const Animal = require('./objetos/Animal');
const Prontuario = require('./objetos/Prontuario');
const Veterinario = require('./objetos/Veterinario');

const cliente = new Cliente();
cliente.setNome('Carlos Silva');
cliente.setTelefone('(61) 99999-1234');

const rex = new Animal();
rex.setNome('Rex');
rex.setEspecie('Cachorro');

const mia = new Animal();
mia.setNome('Mia');
mia.setEspecie('Gato');

const prontuarioRex = new Prontuario();
prontuarioRex.setNumero(1001);
prontuarioRex.setObservacoes('Vacinação em dia.');

const prontuarioMia = new Prontuario();
prontuarioMia.setNumero(1002);
prontuarioMia.setObservacoes('Retorno em 30 dias para exame de rotina.');

const vet1 = new Veterinario();
vet1.setNome('Dra. Ana Souza');
vet1.setCrmv('CRMV-DF 1234');

const vet2 = new Veterinario();
vet2.setNome('Dr. Pedro Lima');
vet2.setCrmv('CRMV-DF 5678');

cliente.addAnimal(rex);
cliente.addAnimal(mia);

rex.setProntuario(prontuarioRex);
mia.setProntuario(prontuarioMia);

vet1.addAnimal(rex);
vet1.addAnimal(mia);
vet2.addAnimal(mia);

console.log('Cliente:', cliente.getNome());
console.log('Telefone:', cliente.getTelefone());

console.log('--- Animais ---');
console.log('Animal 1:', rex.getNome(), '-', rex.getEspecie());
console.log('Animal 2:', mia.getNome(), '-', mia.getEspecie());

console.log('--- Prontuários ---');
console.log(
  'Rex:',
  prontuarioRex.getNumero(),
  '-',
  prontuarioRex.getObservacoes()
);
console.log(
  'Mia:',
  prontuarioMia.getNumero(),
  '-',
  prontuarioMia.getObservacoes()
);

console.log('--- Veterinários do Rex ---');
console.log(rex.getVeterinarios()[0].getNome());

console.log('--- Veterinários da Mia ---');
console.log(mia.getVeterinarios()[0].getNome());
console.log(mia.getVeterinarios()[1].getNome());

console.log('--- Referências cruzadas ---');
console.log('Dono do Rex:', rex.getCliente().getNome());
console.log('Dono da Mia:', mia.getCliente().getNome());
console.log('Animal do prontuário 1001:', prontuarioRex.getAnimal().getNome());
console.log('Animal do prontuário 1002:', prontuarioMia.getAnimal().getNome());
console.log(
  'Animais da',
  vet1.getNome() + ':',
  vet1.getAnimais()[0].getNome(),
  'e',
  vet1.getAnimais()[1].getNome()
);
console.log('Animais do', vet2.getNome() + ':', vet2.getAnimais()[0].getNome());
