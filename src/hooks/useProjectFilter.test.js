import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProjectFilter } from './useProjectFilter';

const mockProjectsData = {
  "Web Development": [
    {
      title: "Project A",
      technologies: ["React", "Node.js"],
      description: "Web app A"
    },
    {
      title: "Project B",
      technologies: ["React", "MongoDB"],
      description: "Web app B"
    }
  ],
  "Python": [
    {
      title: "Project C",
      technologies: ["Python", "PyGame"],
      description: "Python app C"
    }
  ]
};

describe('useProjectFilter', () => {
  it('returns all projects when no filters applied', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    expect(result.current.filteredProjects).toHaveLength(3);
    expect(result.current.selectedCategory).toBe('All');
    expect(result.current.selectedTech).toBe('All');
  });

  it('filters by category', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    act(() => {
      result.current.setSelectedCategory('Web Development');
    });

    expect(result.current.filteredProjects).toHaveLength(2);
    expect(result.current.filteredProjects.every(p =>
      p.category === 'Web Development'
    )).toBe(true);
  });

  it('filters by technology', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    act(() => {
      result.current.setSelectedTech('React');
    });

    expect(result.current.filteredProjects).toHaveLength(2);
    expect(result.current.filteredProjects.every(p =>
      p.technologies.includes('React')
    )).toBe(true);
  });

  it('filters by both category and technology', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    act(() => {
      result.current.setSelectedCategory('Web Development');
      result.current.setSelectedTech('MongoDB');
    });

    expect(result.current.filteredProjects).toHaveLength(1);
    expect(result.current.filteredProjects[0].title).toBe('Project B');
  });

  it('returns empty array when no matches', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    act(() => {
      result.current.setSelectedCategory('Python');
      result.current.setSelectedTech('React');
    });

    expect(result.current.filteredProjects).toHaveLength(0);
  });

  it('resets tech filter when category changes', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    act(() => {
      result.current.setSelectedCategory('Web Development');
      result.current.setSelectedTech('React');
    });

    act(() => {
      result.current.setSelectedCategory('Python');
    });

    expect(result.current.selectedTech).toBe('All');
  });

  it('returns available technologies based on selected category', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    // All categories - all techs
    expect(result.current.availableTechs).toContain('React');
    expect(result.current.availableTechs).toContain('Python');

    act(() => {
      result.current.setSelectedCategory('Python');
    });

    expect(result.current.availableTechs).toContain('Python');
    expect(result.current.availableTechs).toContain('PyGame');
    expect(result.current.availableTechs).not.toContain('React');
  });

  it('returns all categories from data', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    expect(result.current.categories).toContain('All');
    expect(result.current.categories).toContain('Web Development');
    expect(result.current.categories).toContain('Python');
  });

  it('adds category property to flattened projects', () => {
    const { result } = renderHook(() => useProjectFilter(mockProjectsData));

    expect(result.current.filteredProjects[0]).toHaveProperty('category');
  });
});
