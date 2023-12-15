<template>
    <li class="nav-item dropdown color2">
        <a class="nav-link dropdown-toggle title-nav" href="#" role="button" data-bs-toggle="dropdown"
            area-expanded="false">
            <i class="fas fa-user-tie"></i>
            Proveedores
        </a>
        <ul class="dropdown-menu text-color" style="min-width: 300px; gap: 5px;">
            <li class="selecte">
                <router-link to="/manager-proveedores" class="nav-link title-app title-nav text-secondary d-inline-block">
                    <i class="fas fa-user-tie text-secondary"></i> Administración
                </router-link>
            </li>
            <li class="selecte">
                <router-link to="/registra r-proveedor" class="nav-link title-app title-nav text-secondary d-inline-block">
                    <i class="fas fa-user-tie text-secondary"></i> Agregar nuevo
                </router-link>
            </li>
            <li class="selecte">
                <router-link to="/manager-proveedores" class="nav-link title-app title-nav text-secondary d-inline-block">
                    <i class="fas fa-user-tie text-secondary"></i> Agregar
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>

// Servicios web rest full json
export default {
    name: 'ProveedorCatalogoComponent'
}
</script>

<style scoped>
* {
    color: #f2e8cf !important;
}

.selecte:hover {
    transition: .3s all ease-in-out;
    background-color: #f2e8cf !important;
}
</style>