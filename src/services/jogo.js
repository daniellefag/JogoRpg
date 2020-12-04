import { http } from './config'

export default {

    calcularIniciativa:() => {
        return http.get('jogo/calcularIniciativa')
    },

    
    realizarAtaque:() => {
        return http.get('jogo/realizarAtaque')
    },

    
    calcularDano:() => {
        return http.get('jogo/calcularDano')
    }
}