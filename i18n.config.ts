import en from './locales/en/'
import pt from './locales/pt'

export default defineI18nConfig(()=>{
    return {
        legacy: false,
        locale: 'pt',
        messages: {
            en,
            pt
        }
    }
})