var option = <%= JSON.stringify(options,null, 2) %>

export default async function ({ router, store }, inject) {
    inject(option.namespace,  option.theme );
}