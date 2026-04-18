document.body.classList.add('has-motion')

function initReveal() {
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))
  if (!revealItems.length) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 50, 220)}ms`
    observer.observe(item)
  })
}

function normalise(value) {
  return String(value || '').trim().toLowerCase()
}

function initCatalogFilters() {
  const grid = document.getElementById('catalogGrid')
  const resultCount = document.getElementById('catalogResultCount')

  if (!grid || !resultCount) {
    return
  }

  const cards = Array.from(grid.querySelectorAll('[data-card]'))
  const search = document.getElementById('catalogSearch')
  const scope = document.getElementById('scopeFilter')
  const type = document.getElementById('typeFilter')
  const category = document.getElementById('categoryFilter')
  const pricing = document.getElementById('pricingFilter')
  const badge = document.getElementById('badgeFilter')
  const sort = document.getElementById('sortFilter')
  const controls = [search, scope, type, category, pricing, badge, sort].filter(Boolean)

  function currentFilters() {
    return {
      search: normalise(search?.value),
      scope: normalise(scope?.value),
      type: normalise(type?.value),
      category: normalise(category?.value),
      pricing: normalise(pricing?.value),
      badge: normalise(badge?.value),
      sort: normalise(sort?.value || 'priority'),
    }
  }

  function matches(card, filters) {
    const dataset = card.dataset
    if (filters.scope && normalise(dataset.scope) !== filters.scope) return false
    if (filters.type && normalise(dataset.type) !== filters.type) return false
    if (filters.category && normalise(dataset.category) !== filters.category) return false
    if (filters.pricing && normalise(dataset.pricing) !== filters.pricing) return false
    if (filters.badge && normalise(dataset.badge) !== filters.badge) return false
    if (filters.search && !normalise(dataset.search).includes(filters.search)) return false
    return true
  }

  function compareCards(left, right, sortMode) {
    if (sortMode === 'name') {
      return left.querySelector('h3')?.textContent.localeCompare(right.querySelector('h3')?.textContent || '') || 0
    }

    if (sortMode === 'newest') {
      const leftDate = String(left.dataset.date || '')
      const rightDate = String(right.dataset.date || '')
      return rightDate.localeCompare(leftDate)
    }

    const priorityDiff = Number(right.dataset.priority || 0) - Number(left.dataset.priority || 0)
    if (priorityDiff !== 0) {
      return priorityDiff
    }

    const dateDiff = String(right.dataset.date || '').localeCompare(String(left.dataset.date || ''))
    if (dateDiff !== 0) {
      return dateDiff
    }

    return left.querySelector('h3')?.textContent.localeCompare(right.querySelector('h3')?.textContent || '') || 0
  }

  function applyFilters() {
    const filters = currentFilters()
    const visibleCards = cards.filter((card) => matches(card, filters)).sort((left, right) => compareCards(left, right, filters.sort))

    cards.forEach((card) => {
      card.hidden = true
      card.classList.add('is-filter-hidden')
    })

    visibleCards.forEach((card) => {
      card.hidden = false
      card.classList.remove('is-filter-hidden')
      grid.appendChild(card)
    })

    resultCount.textContent = `${visibleCards.length} ${visibleCards.length === 1 ? 'entry' : 'entries'}`
  }

  controls.forEach((control) => {
    control.addEventListener('input', applyFilters)
    control.addEventListener('change', applyFilters)
  })

  applyFilters()
}

initReveal()
initCatalogFilters()
