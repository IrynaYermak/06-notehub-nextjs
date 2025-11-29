'use client';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function NotesClient() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data: response } = useQuery({
    queryKey: ['notes', search, page],
    queryFn: () => fetchNotes({ search, page }),
    refetchOnMount: false,
  });

  return <>{response && <NoteList notes={response.notes} />}</>;
}
