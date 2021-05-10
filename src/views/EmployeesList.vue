<template>
    <div>
        <div v-for="{ id, name, year, job, description} in employees" :key="id">
            <p>{{ name }}</p>
            <p>{{ year }}</p>
            <p>{{ job }}</p>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
import { loadEmployees, deleteEmployee } from '@/main'

export default {
    setup () {
        const employees = loadEmployees()
        return { employees, deleteEmployee }
    }
}
</script>