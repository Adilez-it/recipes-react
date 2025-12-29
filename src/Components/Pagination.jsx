import "../styles/Pagination.css";

export default function Pagination({ page, setPage, hasNextPage }) {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Previous
      </button>

      <span>Page {page + 1}</span>

      <button onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
}
