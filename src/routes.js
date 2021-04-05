import PublicIndex from './views/Index.svelte'
import Domain from './views/Domain.svelte'
import Sig from './views/Sig.svelte'
import NotFound from './views/NotFound.svelte'

export const routes = {
  // Exact path
  '/': PublicIndex,

  // Using named parameters, with last being optional
  '/sig': Sig,

  // Wildcard parameter
  '/domain': Domain,

  // Catch-all
  // This is optional, but if present it must be the last
  '*': NotFound
}
