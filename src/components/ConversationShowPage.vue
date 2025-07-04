<template>
  <div class="conversation-show-page">
    <h1>Détails de la conversation</h1>
    <div class="conversation-info">
      <p><strong>ID de la conversation :</strong> {{ conversationId }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationShowPage',
  data() {
    return {
      conversationId: null
    }
  },
  created() {
    // Récupérer l'ID de la conversation depuis les paramètres de route
    this.conversationId = this.$route.params.id
  }
}
</script>

<style scoped>
.conversation-show-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.conversation-info {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin-top: 1rem;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
</style> 