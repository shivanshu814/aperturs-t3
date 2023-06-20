import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Typography, Checkbox } from "@material-tailwind/react";


interface TableRow {
    id: number;
    message: string;
    author: string;
    date: string;
  }

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({ opacity: 1, transition: { delay: i * 0.1 } }),
};

export default function CommitsTable({ rows }: { rows: TableRow[] }) {

  
  const [selectedRows, setSelectedRows] = useState<number[]>([]);


  const toggleSelectAll = () => {
    if (selectedRows.length === rows.length) {
      // If all rows are already selected, deselect all rows
      setSelectedRows([]);
    } else {
      // If some or no rows are selected, select all rows
      setSelectedRows(rows.map((row) => row.id));
    }
  };

  const toggleRowSelection = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <Card className="p-4 shadow-sm lg:w-[70vw] w-[90vw] ">
      <Typography variant="h5">Commits</Typography>
      <div className="flex items-center mb-4">
        <Checkbox
          color="blue"
          checked={selectedRows.length === rows.length}
          onChange={toggleSelectAll}
        />
        <Typography variant="h6" className="ml-2">
          {selectedRows.length} row(s) selected
        </Typography>
      </div>
      <AnimatePresence>
        {rows.map((row, index) => (
          <motion.div
            key={row.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerVariants}
            custom={index}
          >
            <Card
              className="p-4 my-3 shadow-md cursor-pointer mx-2"
              onClick={() => toggleRowSelection(row.id)}
            >
              <div className="flex items-center">
                <Checkbox
                  color="blue"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleRowSelection(row.id)}
                />
                <div>
                  <Typography variant="h6" className="text-blue-gray-800 ">
                    {row.message}
                  </Typography>
                  <Typography variant="body2">Created on {row.date} by {row.author}</Typography>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </Card>
  );
}