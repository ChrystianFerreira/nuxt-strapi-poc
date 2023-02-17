export default function useDraft(route, runtimeConfig) {
  const publicationStateQuery = computed(() => 
    route.query.DRAFT_ACCESS_KEY && route.query.DRAFT_ACCESS_KEY === runtimeConfig.public.DRAFT_ACCESS_KEY
      ? "&publicationState=preview&filters[publishedAt][$null]=true"
      : "&publicationState=live"
  );

  return {
    publicationStateQuery
  }
} 