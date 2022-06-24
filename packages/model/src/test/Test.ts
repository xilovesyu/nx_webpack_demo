import { Agentv1cmsAgententityApi } from '../swagger-codegen/automatic'
import { Api } from '../swagger-typescript-api/automatic/MySuperbApi'

export const testSwaggerCodeGen = () => {
  new Agentv1cmsAgententityApi().agentV1CmsagentDeleteAgentEntity('dddd')
}

export const testSwaggerTypescriptCodeGen = () => {
  new Api().agent.agentV1CmsagentDeleteAgentEntity('dddd')
}
