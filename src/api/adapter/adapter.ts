interface Profile {
  id: number;
  name: string;
}

interface Person {
  id: number;
  name: string;
  lastname: string;
  profile: Profile;
}

interface Pageable {
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface PaginatedResponse {
  content: Person[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface AdaptedResponse {
  content: Array<{
    id: number;
    name: string;
    lastName: string;
    profile: {
      id: number;
      name: string;
    };
  }>;
  pagination: {
    index: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adaptResponse = (data: PaginatedResponse): AdaptedResponse => {
  return {
    content: data.content.map((person) => ({
      id: person.id,
      name: person.name,
      lastName: person.lastname,
      profile: {
        id: person.profile.id,
        name: person.profile.name,
      },
    })),
    pagination: {
      index: data.pageable.pageNumber,
      size: data.pageable.pageSize,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
    },
  };
};
