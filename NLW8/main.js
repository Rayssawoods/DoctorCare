//Função para mudar o nav ao scrollar a tela
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function onClickMenu(){
  navigation.classList.add('scroll')
}